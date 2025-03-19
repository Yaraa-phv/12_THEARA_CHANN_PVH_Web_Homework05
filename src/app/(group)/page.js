import Image from "next/image";
import styles from "../page.module.css";
import CategoryCards from "@/components/CategoryCards";


export default function Home() {
  return (
    <>
    <div className="">
      <CategoryCards/>
    </div>
    </>
  )
}