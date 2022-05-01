import {
  GitHub,
  Linkedin,
  Instagram,
  Twitter,
  Disc,
  Mail,
} from "react-feather";
import Canvas from "../components/Canvas";
import PageLayout from "../components/PageLayout";

export default function Drawing() {
  return (
    <PageLayout>
      <main className="h-screen w-screen  bg-black p-2">
        <Canvas />
      </main>
    </PageLayout>
  );
}
