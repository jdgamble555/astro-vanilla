export async function GET() {
    return new Response(JSON.stringify({
        random: (Math.random() + 1).toString(36).substring(7)
    }));
}