export default function Loading() {
  return (
    // UPDATED: Use bg-background for the background
    <div
      className=(
        "flex min-h-screen items-center justify-center",
      
      )
    >
      <div className="flex flex-col items-center">
        {/* UPDATED: Use text-primary for the spinner color */}
        Loading . . . 
      </div>
    </div>
  );
}
