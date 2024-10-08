interface IPost {
  id: string;
  title: string;
  author: string;
  preview: string;
  content: string;
  date: string;
  comments: number;
  category: string;
  replies?: IPost[];
}