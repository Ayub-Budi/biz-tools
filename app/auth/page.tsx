import Button from "@/Component/button";
import Input from "@/Component/input";
export default function authPage() {
  return <div className="flex min-h-screen p-5 bg-gray-200 gap-3">
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4 max-w-100 w-full">
            <Input
              label="Email"
              type="email"
              placeholder="Masukkan email Anda"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Masukkan password Anda"
            />
          <Button submit type="primary" className="w-full">
            Login
          </Button>
        </form>
    </div>
  </div>;
}