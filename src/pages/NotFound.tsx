import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>
          <Button onClick={() => navigate("/dashboard")} className="gradient-primary">
            <Home className="h-4 w-4 mr-2" />
            Ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
