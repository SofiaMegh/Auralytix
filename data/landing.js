import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "70K+",
      label: "Active Users",
    },
    {
      value: "$2B+",
      label: "Transactions Tracked",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "4.9/5",
      label: "User Rating",
    },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Advanced Analytics",
      description:
        "Get detailed insights into your spending patterns with AI-powered analytics",
    },
    {
      icon: <Receipt className="h-8 w-8 text-green-600" />,
      title: "Smart Receipt Scanner",
      description:
        "Extract data automatically from receipts using advanced AI technology",
    },
    {
      icon: <PieChart className="h-8 w-8 text-green-600" />,
      title: "Budget Planning",
      description: "Create and manage budgets with intelligent recommendations",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "Multi-Account Support",
      description: "Manage multiple accounts and credit cards in one place",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Multi-Currency",
      description: "Support for multiple currencies with real-time conversion",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Automated Insights",
      description: "Get automated financial insights and recommendations",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "1. Create Your Account",
      description:
        "Get started in minutes with our simple and secure sign-up process",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "2. Track Your Spending",
      description:
        "Automatically categorize and track your transactions in real-time",
    },
    {
      icon: <PieChart className="h-8 w-8 text-green-600" />,
      title: "3. Get Insights",
      description:
        "Receive AI-powered insights and recommendations to optimize your finances",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Ava Sinclair",
      role: "Founder & CEO, NovaTech Solutions",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "Auralytix has completely revolutionized the way I handle my business finances. The AI-driven insights uncovered cost-saving opportunities I would’ve otherwise overlooked—it's like having a financial strategist on autopilot.",
    },
    {
      name: "Jordan Reyes",
      role: "CFO, Emberwave Analytic",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "The receipt scanner has been a total game-changer. It’s like having a personal assistant that takes care of all the boring bits—now I spend my time growing the business, not crunching numbers.",
    },
    {
      name: "Lena Kallen",
      role: "Entrepreneur, EcoSphere Ventures",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      quote:
        "Auralytix is my go-to recommendation for clients. Its multi-currency features and deep-dive analytics make it a powerhouse tool for international investors.",
    },
  ];