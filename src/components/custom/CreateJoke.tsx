"use client"

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Input } from "../ui/input"
import { useState } from "React"
import { Button } from "../ui/button"

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
}

export default function CreateJoke() {
    return (
    <>
        <Dialog>
            <DialogTrigger className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Make a Joke!
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                    <DialogTitle>Make a Joke!</DialogTitle>
                    <DialogDescription>
                        Try to make a really short joke that people can resonate! 
                    </DialogDescription>
                    </DialogHeader>
                    <br/>   
                    <Input type="text" placeholder="Eg: What do you call it when a cow grows facial hair? A moo-stache."/>
                    <br/>
                    <Button type="submit">
                        Send!
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    </>
    )
}