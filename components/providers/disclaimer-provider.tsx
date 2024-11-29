"use client";

import { useState, useEffect } from "react";
import { DisclaimerModal } from "@/components/disclaimer-modal";
import { useCookies } from "next-client-cookies";

export const DisclaimerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookies = useCookies();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [messageAccepted, setMessageAccepted] = useState(false);

  useEffect(() => {
    const cookiesStatus = cookies.get("vicuna-cookies");
    const messageStatus = cookies.get("vicuna-message");

    if (cookiesStatus === "accepted" && messageStatus === "accepted") {
      setShowDisclaimer(false);
    }
  }, []);

  const handleCookiesChange = (checked: boolean) => {
    setCookiesAccepted(checked);
  };

  const handleMessageChange = (checked: boolean) => {
    setMessageAccepted(checked);
  };

  const handleContinue = () => {
    if (cookiesAccepted && messageAccepted) {
      cookies.set("vicuna-cookies", "accepted");
      cookies.set("vicuna-message", "accepted");
      setShowDisclaimer(false);
    }
  };

  return (
    <>
      {children}
      {showDisclaimer && (
        <div className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50">
          <DisclaimerModal
            cookiesAccepted={cookiesAccepted}
            messageAccepted={messageAccepted}
            onCookiesChange={handleCookiesChange}
            onMessageChange={handleMessageChange}
            onContinue={handleContinue}
          />
        </div>
      )}
    </>
  );
};
