"use client"

export default function Success() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary">
            <h1 className="text-white font-Nunito font-semibold text-heading">Raidvorlage erfolgreich erstellt!</h1>
            <div id="textbox">{}</div>
            <div id="socials"></div>
        </div>
    );
}