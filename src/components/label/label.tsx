interface LabelProps {
  label: string;
  full?: boolean;
}

const Label: React.FC<LabelProps> = ({ label, full }) => {
  return (
    <div
      className={`z-20 h-[50px] ${
        full ? 'w-full left-0' : 'w-[120px] left-[calc(50%-120px/2)]'
      } flex items-center justify-center text-bg rounded-full backdrop-blur-md bg-white/30 absolute -bottom-4`}
    >
      {label}
    </div>
  );
};

export default Label;
