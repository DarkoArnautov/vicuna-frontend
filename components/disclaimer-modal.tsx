"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DisclaimerModalProps {
  cookiesAccepted: boolean;
  messageAccepted: boolean;
  onCookiesChange: (checked: boolean) => void;
  onMessageChange: (checked: boolean) => void;
  onContinue: () => void;
}

export const DisclaimerModal = ({
  cookiesAccepted,
  messageAccepted,
  onCookiesChange,
  onMessageChange,
  onContinue,
}: DisclaimerModalProps) => {
  return (
    <Dialog open={true}>
      <DialogContent className="bg-card text-primary">
        <DialogHeader>
          <DialogTitle className="text-center py-10">
            Welcome to Vicuna Finance
          <p className="mt-4 text-center font-extralight">(Work In Progress)</p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col text-left text-sm gap-8">
            <p>
              Vicuna Finance is a decentralized, non-custodial lending and yield
              optimizing platform.
            </p>
            <p>
              By accessing the Vicuna Finance website, you agree to the{" "}
              <a
                href="https://vicuna-finance.gitbook.io/vicuna-finance/other-info/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400"
              >
                terms of service
              </a>
              .
            </p>
            <p>
              We use cookies to provide you with the best experience and to help
              improve our website and application. Please read our{" "}
              <a
                href="https://vicuna-finance.gitbook.io/vicuna-finance/other-info/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400"
              >
                Cookie Policy
              </a>{" "}
              for more information.
            </p>
            <div className="flex items-center justify-between w-full">
              <Checkbox
                checked={cookiesAccepted}
                onCheckedChange={onCookiesChange}
              />
              <p className="w-3/4">
                By clicking to this checkbox you agree to the storing of cookies
                on your device to enhance site navigation, analyze site usage
                and provide customer support.
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <Checkbox
                checked={messageAccepted}
                onCheckedChange={onMessageChange}
              />
              <p className="w-3/4">
                I confirm that I have read and agree to this message. Do not
                show again for 30 days.
              </p>
            </div>
          </div>
        </DialogDescription>
        <DialogFooter className="py-4">
          <Button
            className="w-full"
            onClick={onContinue}
            disabled={!cookiesAccepted || !messageAccepted}
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
