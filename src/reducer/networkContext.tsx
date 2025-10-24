import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import NoConnectionModal from "../components/connection";

type NetworkContextType = {
  isOnline: boolean;
};

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline }}>
      {children}

      {/* Exibe modal global se estiver offline */}
      {!isOnline && (
        <NoConnectionModal
          onRetry={() => {
            window.location.reload();
          }}
        />
      )}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) throw new Error("useNetwork deve ser usado dentro do NetworkProvider");
  return context;
};
