interface GoogleLoginProps {
  buttonLabel: string;
  inputUrl: string;
}

export function GoogleAuthButton({ buttonLabel, inputUrl }: GoogleLoginProps) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="text-[#043133] text-2xl font-poppins">OR</p>
      <button className="flex items-center justify-center gap-x-3 text-[16px] text-[#043133] border border-[#D2D2D2] font-poppins w-3/10">
        <img src={inputUrl} className="w-6 h-6" />
        {buttonLabel}
      </button>
    </div>
  );
}
