export default function SecondaryButton({ children }: { children: any }) {
  return <button className="py-3 px-6 transition rounded-lg hover:bg-off-dark hover:ring-2 hover:ring-off-dark hover:ring-offset-2 hover:ring-offset-transparent">{children}</button>;
}
