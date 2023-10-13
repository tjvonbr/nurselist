import RecruiterForm from "@/components/RecruiterForm";
import { Icons } from "@/components/common/Icons";
import Image from "next/image";
import imageSrc from "public/pleasant_hospital.svg";
import Link from "next/link";
import NurseListLogo from "@/components/NurseListLogo";

export default function Recruiters() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="relative h-screen flex flex-col justify-center items-center bg-slate-200">
        <Link
          href="/"
          className="absolute top-10 left-10 flex items-center space-x-2"
        >
          <Icons.left color="black" size={20} />
          <p className="text-black">Back</p>
        </Link>
        <Image
          src={imageSrc}
          alt="A pleasant hospital"
          height={500}
          width={500}
        />
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <NurseListLogo />
            <h1 className="text-3xl text-black font-bold">Recruiters</h1>
            <p className="w-full text-center text-sm text-slate-600">
              If you work for a travel nursing agency or you&apos;re an
              independent recruiter, you can gain access to our network of
              travel nurses to fill your contracts. Fill out the form below and
              someone will reach out to you soon to get you started.
            </p>
          </div>
          <RecruiterForm />
        </div>
      </div>
    </div>
  );
}
