interface LabelProps {
  label: string;
  full?: boolean;
}

const Label: React.FC<LabelProps> = ({ label, full }) => {
  return (
    <div
      className={`z-20 h-[50px] ${
        full
          ? 'w-full left-0 -bottom-1'
          : 'w-[120px] left-[calc(50%-120px/2)] -bottom-4'
      } flex items-center justify-center text-bg rounded-full backdrop-blur-[8px] bg-white/30 absolute`}
    >
      {label}
    </div>
  );
};

export default Label;
