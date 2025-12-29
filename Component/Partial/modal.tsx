import Icon from "@/component/partial/icon";

type Type = "center" | "left" | "right";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  type?: Type;
  title?: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  type = "right",
  title,
}: ModalProps) {
  if (!isOpen) return null;
  const locationMap: Record<
    Type,
    { containerClass: string; cardClass: string }
  > = {
    center: {
      containerClass:
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
      cardClass:
        "relative w-full h-full md:h-fit md:max-w-xl md:rounded-lg bg-white shadow-lg",
    },
    left: {
      containerClass:
        "fixed inset-0 z-50 flex items-end md:items-center bg-black/50",
      cardClass:
        "relative w-full h-[90vh] md:h-full md:max-w-md rounded-t-xl md:rounded-r-xl md:rounded-l-none bg-white shadow-lg",
    },
    right: {
      containerClass:
        "fixed inset-0 z-50 flex items-end md:items-center justify-end bg-black/50",
      cardClass:
        "relative w-full  h-[90vh] md:h-full md:max-w-md rounded-t-xl md:rounded-l-xl md:rounded-r-none bg-white shadow-lg",
    },
  };

  return (
    <div
      className={locationMap[type].containerClass}
      onClick={onClose} // klik luar → close
    >
      <div
        className={locationMap[type].cardClass}
        onClick={(e) => e.stopPropagation()} // klik dalam → stop
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <p className="text-xl font-bold">{title}</p>
          <button onClick={onClose}>
            <Icon name="CircleX" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
