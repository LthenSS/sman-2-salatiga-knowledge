import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Edit, Eye, Clock, User, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { knowledgeItems, comments as initialComments } from '@/data/mockData';
import { toast } from 'sonner';

export default function KnowledgeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(
    initialComments.filter((c) => c.knowledgeId === id)
  );

  const knowledge = knowledgeItems.find((k) => k.id === id);

  if (!knowledge) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <p className="text-muted-foreground">Artikel tidak ditemukan</p>
        <Button onClick={() => navigate('/dashboard')}>Kembali ke Beranda</Button>
      </div>
    );
  }

  const handleDownload = () => {
    toast.success('PDF berhasil diunduh!');
  };

  const handleEdit = () => {
    toast.info('Fitur edit akan segera tersedia');
  };

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast.error('Komentar tidak boleh kosong');
      return;
    }

    const comment = {
      id: Date.now().toString(),
      knowledgeId: id!,
      author: user?.name || 'Anonymous',
      content: newComment,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setComments([...comments, comment]);
    setNewComment('');
    toast.success('Komentar berhasil ditambahkan');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="shrink-0 mt-1"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{knowledge.category}</Badge>
            {knowledge.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-foreground">{knowledge.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {knowledge.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {new Date(knowledge.createdAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              {knowledge.views} views
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {user?.role === 'admin' && (
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
        <Button variant="outline" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Content */}
      <Card className="border-border/50">
        <CardContent className="p-8">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {knowledge.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-2xl font-bold mt-6 mb-4 text-foreground">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-semibold mt-4 mb-2 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground ml-4">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.match(/^\d+\. /)) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 list-decimal">
                    {paragraph.replace(/^\d+\. /, '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Komentar ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Comment */}
          <div className="space-y-3">
            <Textarea
              placeholder="Tulis komentar Anda..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            <Button onClick={handleAddComment} className="gradient-primary">
              <Send className="h-4 w-4 mr-2" />
              Kirim Komentar
            </Button>
          </div>

          <Separator />

          {/* Comments List */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">
                Belum ada komentar. Jadilah yang pertama!
              </p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 p-4 rounded-lg bg-muted/30">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {comment.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">
                        {comment.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{comment.content}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
