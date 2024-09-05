import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog"

export default function CreateJoke() {
    return (
    <>
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Make a Joke!</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
    )
}