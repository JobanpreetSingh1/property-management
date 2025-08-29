
export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-3">
        <input className="w-full border rounded-lg p-2" placeholder="Email" type="email" />
        <input className="w-full border rounded-lg p-2" placeholder="Password" type="password" />
        <button className="w-full bg-blue-600 text-white rounded-lg py-2">Sign In</button>
      </form>
    </div>
  )
}
