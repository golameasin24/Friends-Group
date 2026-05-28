This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Features
Dashboard Layout: বামপাশে প্রোফাইল সাইডবার আর ডানপাশে সব স্ট্যাটাস কার্ড পাশাপাশি সুন্দরভাবে সাজানো।

Relationship Tracker: কার সাথে কতদিন যোগাযোগ নেই এবং পরবর্তী যোগাযোগের ডেট কবে, তা ডাইনামিকালি ট্র্যাক করা যায়।

Quick Check-In: সরাসরি বাটন ক্লিক করে Call, Text, বা Video যোগাযোগের রেকর্ড যুক্ত করা যায় (ডুপ্লিকেট ডাটা চেকসহ)।

Timeline Filter: ড্রপডাউন ইনপুটের মাধ্যমে পুরো টাইমলাইন থেকে শুধু কল, টেক্সট বা ভিডিওর হিস্ট্রি আলাদা করে ফিল্টার করা যায়।

Status Badges: ফ্রেন্ডের অবস্থার ওপর ভিত্তি করে Overdue, Attention বা On-track কালারফুল ব্যাজ দেখায়।

Toast Notification: যেকোনো অ্যাকশন বা পেজ পরিবর্তনের সময় স্ক্রিনে সুন্দর পপ-আপ অ্যালার্ট মেসেজ আসে।

Technologies
Next.js (App Router): মেইন ফ্রেমওয়ার্ক এবং ডাইনামিক রাউটিংয়ের জন্য।

React Context API: পুরো অ্যাপের ডাটা এবং স্টেট (Call, Text, Filter) গ্লোবালি ম্যানেজ করার জন্য।

Tailwind CSS & daisyUI: সম্পূর্ণ রেসপনসিভ ডিজাইন এবং রেডিমেড লোডিং স্পিনারের জন্য।

React-Toastify: স্মুথ নোটিফিকেশন অ্যালার্টের জন্য।

React Icons: বিভিন্ন দরকারি আইকন ব্যবহারের জন্য।
