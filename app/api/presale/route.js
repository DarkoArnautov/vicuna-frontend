import { NextRequest } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(req) {
    try {
        const { action, wallet_address, amount, currency, option, ve_period, friendReferralCode } = await req.json();
        if (!action || !wallet_address) {
            return new Response(JSON.stringify({ error: "Action and wallet address are required." }), { status: 400 });
        }

        if (action === "assignReferralCode") {
            const result = await handleReferralCodeAssignment(wallet_address);
            return new Response(JSON.stringify(result), { status: 200 });
        }

        if (action === "deposit") {
            console.log("sdfsdfsdf - actopm - deposit");

            if (!amount || !currency || option === undefined || ve_period === undefined) {
                return new Response(JSON.stringify({ error: "Amount, currency, option, and ve_period are required for deposit." }), { status: 400 });
            }

            const result = await deposit(wallet_address, amount, currency, option, ve_period, friendReferralCode);
            console.log(friendReferralCode);

            return new Response(JSON.stringify(result), { status: 200 });
        }

        return new Response(JSON.stringify({ error: "Invalid action." }), { status: 400 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid JSON in request body" }), { status: 400 });
    }
}

async function handleReferralCodeAssignment(walletAddress) {
    const user = await prisma.presaleInvestor.findUnique({
        where: { wallet_address: walletAddress }
    });

    if (!user) {
        return { error: "User not found. Please deposit to generate a referral code." };
    }

    if (user.selfReferralCode === "") {
        let newCode = generateRandomCode(4);

        let referralExists = await prisma.validReferralCode.findUnique({
            where: { referralCode: newCode }
        });

        while (referralExists) {
            newCode = generateRandomCode(4);
            referralExists = await prisma.validReferralCode.findUnique({
                where: { referralCode: newCode }
            });
        }

        user.selfReferralCode = newCode;

        await prisma.presaleInvestor.update({
            where: { wallet_address: walletAddress },
            data: {
                selfReferralCode: newCode,
            }
        });

        await prisma.validReferralCode.create({
            data: {
                wallet_address: walletAddress,
                referralCode: newCode
            }
        });

        return { message: `Referral code ${newCode} assigned successfully.` };
    } else {
        return { error: "You already have a referral code assigned." };
    }
}

async function deposit(walletAddress, amount, currency, option, ve_period, friendReferralCode) {
    console.log(walletAddress);
    let user;
    try {
        user = await prisma.presaleInvestor.findUnique({
            where: { wallet_address: walletAddress }
        });
    } catch (error) {
        console.error("Error searching user:", error);
        return { error: "An error occurred while searching the user." };
    }

    // If user doesn't exist, create a new one
    if (!user) {
        const newUserData = {
            wallet_address: walletAddress,
            option: option,
            ve_period: ve_period,
            friendReferralCode: friendReferralCode,
            usdc_amount_arb: 0,  // Default value for missing fields
            usdt_amount_arb: 0,
            ax_amount_fantom: 0,
            lz_amount_fantom: 0,
            usdc_amount_base: 0,
            usdt_amount_base: 0,
            selfReferralCode: '', // Add default for missing selfReferralCode
        };

        if (currency === "Base_USDC") {
            newUserData.usdc_amount_base = amount;
        } else if (currency === "Base_USDT") {
            newUserData.usdt_amount_base = amount;
        } else if (currency === "Fantom_axUSDC") {
            newUserData.ax_amount_fantom = amount;
        } else if (currency === "Fantom_lzUSDC") {
            newUserData.lz_amount_fantom = amount;
        } else if (currency === "Arb_USDC") {
            newUserData.usdc_amount_arb = amount;
        } else if (currency === "Arb_USDT") {
            newUserData.usdt_amount_arb = amount;
        } else {
            return { error: "Invalid currency type." };
        }

        // Create the new user
        try {
            // Create the new user with the deposit
            user = await prisma.presaleInvestor.create({
                data: newUserData
            });

            return { message: `New user created with deposit of ${amount} ${currency}.` };
        } catch (error) {
            console.error("Error creating user:", error);
            return { error: "An error occurred while creating the user." };
        }

    } else {
        return { error: "You already deposited." };
    }
}

// Helper function to generate a 4-digit alphanumeric code
function generateRandomCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
