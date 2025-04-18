import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlerts, generateMonthlyReports, processRecurringTransactions, triggerRecurringTransactions } from "@/lib/inngest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        checkBudgetAlerts,
        processRecurringTransactions,
        triggerRecurringTransactions,
        generateMonthlyReports
    ],
  });