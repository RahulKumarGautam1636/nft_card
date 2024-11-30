import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCategories } from "@/api/api";
import { BottomNav } from "@/components/bottomNav";


export const metadata = {
  title: "Google",
  // icons: {
  //   icon: '/favicon.ico',
  // },
  description: "Generated by create next app",
};

export default async function ShopLayout({ children }) {

  const categories = await getCategories('layout'); // {categoryList: []} // 

  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer />
      <BottomNav />
    </>
  );
}
