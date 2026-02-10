type FormHeaderProps = {
  title: string;
  subtitle: string;
};

function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <div className="flex flex-col gap-1 mb-6 text-[0.925rem]">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}

export default FormHeader;
