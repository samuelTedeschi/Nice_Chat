'use client'
 
import { useChat } from 'ai/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import { Button } from './ui/button'
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
 
  return (
    <div className='flex items-center justify-center h-screen bg-zinc-900'>
    <Card className='w-[1000px] h-[680px] grid grid-rows-[min-content_1fr_min-content] shadow-lg'>
        <CardHeader>
            <CardTitle>Nice Chat</CardTitle>
            <CardDescription>Tire suas duvidas com a IA</CardDescription>
        </CardHeader>

        <CardContent className='space-y-3'>
            {messages.map(messages => {
                return (
                    <div key={messages.id} className="flex gap-3 text-zinc-800 text-sm ">
                        {messages.role === 'user' && (
                            <Avatar>
                                <AvatarFallback>US</AvatarFallback>
                                <AvatarImage src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" />
                            </Avatar>

                        )}
                        {messages.role === 'assistant' && (
                            <Avatar>
                                <AvatarFallback>Nice IA</AvatarFallback>
                                <AvatarImage src="https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?pid=ImgDet&rs=1" />
                            </Avatar>
                        )}
                        <p className="leading-relax">
                            <span className="block font-bold text-zinc-900">{messages.role === 'user' ? 'Usuario' : 'Nice IA'}:</span>

                            {messages.content}
                        </p>
                    </div>
                )
            })}
        </CardContent>

        <CardFooter className="bg-zinc-50">
            <form className='w-full space-y-4' onSubmit={handleSubmit}>

                <div className='flex space-x-2'>
                    <Input placeholder="Qual é a sua duvida?" value={input}
                        onChange={handleInputChange} />
                    <Button type='submit'>Enviar</Button>
                </div>
            </form>
        </CardFooter>
        <span className='text-sm text-zinc-400 text-center p-2'>@samuelTedeschi</span>
    </Card>
</div>
  )
}