


function handler(req, res) {

    const eventId = req.query.eventId;

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (
            !email.included('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.'});
            return;
        }

        console.log ( email, name, text);
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text,
        };

        console.log(newComment);
        res.status(201).json ({message: 'added comment', comment: newComment});
    }

    if (req.method === 'GET') {
        const dummyList  = [
            
        ]
        }

    }
}

export default handler;