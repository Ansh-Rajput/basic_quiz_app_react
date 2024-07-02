interface QuestionProps {
  question: string;
  options: string[];
  onSelectOption: (str: string) => void;
  selectedOption: string | null;
}

function Question({
  question,
  options,
  onSelectOption,
  selectedOption,
}: QuestionProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl mb-4">{question}</h2>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option)}
            className={`p-2 border rounded-md w-64 ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
