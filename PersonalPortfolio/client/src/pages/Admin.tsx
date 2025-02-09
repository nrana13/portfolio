import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Message } from "@shared/schema";
import { format } from "date-fns";

export default function Admin() {
  const { data: messages } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
  });

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
        <div className="space-y-4">
          {messages?.map((message) => (
            <Card key={message.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{message.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(message.createdAt), "PPp")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{message.email}</p>
                <p>{message.message}</p>
              </CardContent>
            </Card>
          ))}
          {messages?.length === 0 && (
            <p className="text-center text-muted-foreground">No messages yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
