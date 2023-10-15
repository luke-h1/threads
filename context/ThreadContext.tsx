import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generateDummyData";

export const ThreadContext = createContext<Thread[]>([]);

interface Props {
  children: ReactNode;
}

export const ThreadProvider = ({ children }: Props) => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    setThreads(generateThreads());
  }, []);

  return (
    <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
  );
};

export function useThreadContext() {
  return useContext(ThreadContext);
}