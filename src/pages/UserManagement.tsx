import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, UserPlus, Edit, Trash2, Shield, ShieldCheck, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAuth } from '@/contexts/AuthContext';
import { users as initialUsers } from '@/data/mockData';
import { toast } from 'sonner';

const roleColors: Record<string, string> = {
  admin: 'bg-primary/10 text-primary border-primary/30',
  staff: 'bg-success/10 text-success border-success/30',
  guru: 'bg-accent/10 text-accent-foreground border-accent/30',
  siswa: 'bg-warning/10 text-warning border-warning/30',
};

const roleIcons: Record<string, React.ElementType> = {
  admin: ShieldCheck,
  staff: UserCheck,
  guru: Shield,
  siswa: Shield,
};

export default function UserManagement() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  // Redirect if not admin
  if (user?.role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <ShieldCheck className="h-16 w-16 text-muted-foreground/50" />
        <h2 className="text-xl font-semibold text-foreground">Akses Terbatas</h2>
        <p className="text-muted-foreground text-center max-w-md">
          Halaman ini hanya dapat diakses oleh Administrator. 
          Silakan hubungi admin jika Anda memerlukan akses.
        </p>
        <Button onClick={() => navigate('/dashboard')}>Kembali ke Beranda</Button>
      </div>
    );
  }

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (userId: string) => {
    toast.info('Fitur edit user akan segera tersedia');
  };

  const handleDelete = () => {
    if (deleteUserId) {
      setUsers(users.filter((u) => u.id !== deleteUserId));
      toast.success('User berhasil dihapus');
      setDeleteUserId(null);
    }
  };

  const handleAddUser = () => {
    toast.info('Fitur tambah user akan segera tersedia');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manajemen User</h1>
          <p className="text-muted-foreground">
            Kelola pengguna sistem Knowledge Management
          </p>
        </div>
        <Button onClick={handleAddUser} className="gradient-primary">
          <UserPlus className="h-4 w-4 mr-2" />
          Tambah User
        </Button>
      </div>

      {/* Search */}
      <Card className="border-border/50">
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari berdasarkan nama atau email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Daftar Pengguna ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="font-semibold">Nama</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Role</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Terdaftar</TableHead>
                  <TableHead className="font-semibold text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((userItem) => {
                  const RoleIcon = roleIcons[userItem.role] || Shield;
                  return (
                    <TableRow key={userItem.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{userItem.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {userItem.email}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`capitalize ${roleColors[userItem.role]}`}
                        >
                          <RoleIcon className="h-3 w-3 mr-1" />
                          {userItem.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={userItem.status === 'active' ? 'default' : 'secondary'}
                          className={
                            userItem.status === 'active'
                              ? 'bg-success/10 text-success border-success/30'
                              : 'bg-muted text-muted-foreground'
                          }
                        >
                          {userItem.status === 'active' ? 'Aktif' : 'Nonaktif'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(userItem.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(userItem.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-primary"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDeleteUserId(userItem.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteUserId} onOpenChange={() => setDeleteUserId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus User?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. User akan dihapus secara permanen 
              dari sistem.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
