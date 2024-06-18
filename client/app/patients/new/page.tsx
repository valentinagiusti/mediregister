"use client";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import { useState } from "react";
import AddUser from "@/app/components/patients/new/add-user";
import StatusModal from "@/app/components/patients/status-modal";
import { FormValues } from "@/app/types";

const NewPatient = () => {
  const router = useRouter();
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setModalMessage(null);
    try {
      const formDataToSend: { [key: string]: any } = { ...values };

      if (values.documentPhoto) {
        const photoData = new FormData();
        photoData.append("file", values.documentPhoto);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_BACKEND}/users/upload`,
          {
            method: "POST",
            body: photoData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload photo");
        }

        const result = await response.json();
        formDataToSend.documentPhoto = result.url;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      mutate(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users`);
      setModalType("success");
      setModalMessage("User created successfully!");
      setIsModalOpen(true);
      setTimeout(() => {
        router.push("/patients");
      }, 2000);
    } catch (error: any) {
      setModalType("error");
      setModalMessage(error.message);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Add New Patient
        </h1>
        <AddUser onSubmit={handleSubmit} />
      </div>
      {isModalOpen && modalMessage && (
        <StatusModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message={modalMessage}
          type={modalType}
        />
      )}
    </div>
  );
};

export default NewPatient;
