import { Building2, Target, History, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function SchoolProfile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Profil SMAN 2 Salatiga</h1>
        <p className="text-muted-foreground text-lg">
          Sekolah Menengah Atas Negeri 2 Salatiga
        </p>
      </div>

      {/* School Overview */}
      <Card className="border-border/50 overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 border-2 border-primary/30">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">SMAN 2 Salatiga</h2>
            <p className="text-muted-foreground">Unggul dalam Prestasi, Berkarakter Mulia</p>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-muted/30">
              <p className="text-3xl font-bold text-primary">A</p>
              <p className="text-sm text-muted-foreground">Akreditasi</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <p className="text-3xl font-bold text-primary">1975</p>
              <p className="text-sm text-muted-foreground">Tahun Berdiri</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <p className="text-3xl font-bold text-primary">1500+</p>
              <p className="text-sm text-muted-foreground">Siswa Aktif</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Visi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              "Menjadi sekolah unggul yang menghasilkan lulusan beriman, berakhlak mulia, 
              cerdas, terampil, dan berwawasan lingkungan serta mampu bersaing di era global."
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-success" />
              Misi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                Mengembangkan pendidikan karakter berbasis nilai-nilai agama dan budaya bangsa
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                Menyelenggarakan pembelajaran yang aktif, kreatif, efektif, dan menyenangkan
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                Mengembangkan potensi akademik dan non-akademik siswa secara optimal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                Membangun budaya literasi dan inovasi dalam pembelajaran
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">5.</span>
                Menciptakan lingkungan sekolah yang bersih, sehat, dan nyaman
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* History */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-accent" />
            Sejarah Sekolah
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            SMAN 2 Salatiga didirikan pada tahun 1975 sebagai respons terhadap kebutuhan 
            masyarakat Kota Salatiga akan pendidikan menengah atas yang berkualitas. 
            Berlokasi strategis di Jl. Tentara Pelajar No. 10, sekolah ini telah menjadi 
            salah satu institusi pendidikan terkemuka di Jawa Tengah.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Selama hampir 50 tahun, SMAN 2 Salatiga telah menghasilkan ribuan alumni yang 
            berkontribusi di berbagai bidang, mulai dari pemerintahan, bisnis, pendidikan, 
            hingga seni dan budaya. Sekolah ini terus berkomitmen untuk mengembangkan 
            kualitas pendidikan dan menghasilkan generasi muda yang unggul dan berkarakter.
          </p>
          <Separator />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/30">
              <p className="font-semibold text-foreground">Alamat</p>
              <p className="text-sm text-muted-foreground">
                Jl. Tentara Pelajar No. 10, Salatiga, Jawa Tengah 50714
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <p className="font-semibold text-foreground">Kontak</p>
              <p className="text-sm text-muted-foreground">
                Telp: (0298) 123456<br />
                Email: info@sman2salatiga.sch.id
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-warning" />
            Prestasi Sekolah
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Sekolah Adiwiyata Mandiri', year: '2023' },
              { title: 'Juara 1 OSN Matematika Tingkat Provinsi', year: '2024' },
              { title: 'Juara 2 LKS Tingkat Nasional', year: '2023' },
              { title: 'Sekolah Ramah Anak', year: '2022' },
              { title: 'Juara 1 Lomba Debat Bahasa Inggris', year: '2024' },
              { title: 'Juara 1 FLS2N Tingkat Kota', year: '2024' },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border bg-card hover:bg-card-hover transition-colors"
              >
                <p className="font-medium text-foreground">{achievement.title}</p>
                <p className="text-sm text-muted-foreground">{achievement.year}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
