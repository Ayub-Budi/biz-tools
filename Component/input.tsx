'use client';
import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
type Type = "text" | "date" | "email" | "password";
export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: Type;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label className="block text-gray-700 font-bold ">{label}</label>
      <div className='relative'>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          {...(type === "password" && { type: showPassword ? "text" : "password" })}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
      </div>
    </div>
  );
}
