import React, { useEffect, useRef, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import PrimaryButton from "./PrimaryButton";

const shortenAddress = (publicKey) => {
  if (!publicKey) {
    return "";
  }
  const base58 = publicKey.toBase58();
  return `${base58.slice(0, 4)}...${base58.slice(-4)}`;
};

function ConnectWalletLabel({ className = "btn__label", uppercase = false }) {
  const { connected, connecting, publicKey } = useWallet();
  const label = connected
    ? shortenAddress(publicKey)
    : connecting
      ? "Connecting..."
      : "Connect Wallet";
  const text = uppercase && !connected ? label.toUpperCase() : label;

  return <span className={className}>{text}</span>;
}

function ConnectWalletButton({ className = "", children, onClick, ...props }) {
  const { connected, connecting, wallet, connect, disconnect, publicKey } =
    useWallet();
  const { setVisible } = useWalletModal();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!connected) {
      setIsDropdownOpen(false);
    }
  }, [connected]);

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    const handleDocumentClick = (event) => {
      if (!containerRef.current) {
        return;
      }
      if (containerRef.current.contains(event.target)) {
        return;
      }
      setIsDropdownOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const handleClick = async () => {
    if (connected) {
      setIsDropdownOpen((prev) => !prev);
      if (onClick) {
        onClick();
      }
      return;
    }
    if (!wallet) {
      setVisible(true);
      if (onClick) {
        onClick();
      }
      return;
    }
    try {
      await connect();
    } catch (error) {
      // Wallet adapter handles its own error reporting/logging.
    }
    if (onClick) {
      onClick();
    }
  };

  const handleCopyAddress = async () => {
    if (!publicKey) {
      return;
    }
    try {
      await navigator.clipboard.writeText(publicKey.toBase58());
    } catch (error) {
      // Clipboard permissions can fail; ignore silently.
    }
    setIsDropdownOpen(false);
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      // Wallet adapter handles its own error reporting/logging.
    }
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={`wallet-button${connected ? " wallet-button--connected" : ""}`}
      ref={containerRef}
    >
      <PrimaryButton
        className={className}
        type="button"
        onClick={handleClick}
        disabled={connecting}
        {...props}
      >
        {children}
      </PrimaryButton>
      {connected && isDropdownOpen && (
        <div className="wallet-dropdown" role="menu">
          <div className="wallet-dropdown__panel">
            <button
              type="button"
              className="wallet-dropdown__item"
              onClick={handleCopyAddress}
            >
              Copy address
            </button>
            <button
              type="button"
              className="wallet-dropdown__item"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { ConnectWalletButton, ConnectWalletLabel };
