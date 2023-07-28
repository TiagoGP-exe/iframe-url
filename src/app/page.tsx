"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  url: string;
}

function isValidURL(url: string) {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return regex.test(url);
}

export default function Home() {
  const { push } = useRouter();
  const url = useSearchParams().get("url");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (!isValidURL(data.url)) {
      setError("url", {
        type: "manual",
        message: "Invalid URL, please try again.",
      });

      return;
    }
    clearErrors();
    push(`url/?url=${data.url}`);
  };

  if (url) {
    return <iframe className="min-h-screen w-full" src={url} allowFullScreen />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-6xl font-bold text-center">IFRAME</h1>

        <div className="w-full flex flex-col justify-center items-center ">
          <input
            {...register("url")}
            className="w-full max-w-lg p-2 my-4 text-sm text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-black"
            placeholder="https://www.youtube.com/embed/..."
          />
          {errors.url && (
            <span className="text-red-600 text-sm font-semibold">
              {errors.url.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
