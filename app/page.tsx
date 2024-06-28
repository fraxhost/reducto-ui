import InputSection from "@/components/InputSection";
import OutputSection from "@/components/OutputSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row m-5">
        <InputSection></InputSection>
        <OutputSection></OutputSection>
      </div>
    </main>
  );
}
