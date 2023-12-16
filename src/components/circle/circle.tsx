interface CircleProps {
  children?: React.ReactNode;
}

const Circle: React.FC<CircleProps> = ({ children }) => {
  return (
    <div className="w-[70px] h-[70px] flex items-center justify-center bg-accent rounded-full overflow-hidden active:bg-text/10 active:scale-95 transition">
      {children}
    </div>
  );
};

export default Circle;
