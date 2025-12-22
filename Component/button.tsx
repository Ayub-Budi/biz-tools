type Type = 'primary' | 'danger' | 'success' | 'warning' | 'secondary';
export default function PrimaryButton({
  children,
  onClick,
  outline,
  type,
  submit,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
  type?: Type;
  submit?: boolean;
  className?: string;
}) {
  const color = {
    primary : 'bg-blue-500 hover:bg-blue-600 text-white',
    danger : 'bg-red-500 hover:bg-red-600 text-white',
    success : 'bg-green-500 hover:bg-green-600 text-white',
    warning : 'bg-yellow-500 hover:bg-yellow-600 text-white',
    secondary : 'bg-gray-500 hover:bg-gray-600 text-white',
  }

  const outlineColor = {
    primary : 'border border-blue-500 bg-transparent text-blue-500 hover:bg-blue-100',
    danger : 'border border-red-500 bg-transparent text-red-500 hover:bg-red-100',
    success : 'border border-green-500 bg-transparent text-green-500 hover:bg-green-100',
    warning : 'border border-yellow-500 bg-transparent text-yellow-500 hover:bg-yellow-100',
    secondary : 'border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-100',
  }
  return (
    <button
      onClick={onClick}
      className={`${color[type || 'primary']} font-bold py-2 px-4 rounded ${outline ? outlineColor[type || 'primary'] : ''} ${className || ''}`}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}