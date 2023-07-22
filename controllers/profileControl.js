import User from "../models/User.js";
import Review from "../models/Review.js";

const profileControl = {
    async showProfile(req, res){
        const user2 = req.params.userName;
        const user = await User.findOne({ email: { $regex: user2, $options: "i" } });

        var userLoggedIn = req.session.user;
        var userSesh = null;
        var isSelf = false;
        if (userLoggedIn){
            userSesh = userLoggedIn.email.split('@')[0];
        
            if(userLoggedIn.email == user.email)
                isSelf = true;
        }

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"];
        var dateString = months[user.monthMade - 1] + " " + user.dateMade + ", " + user.yearMade;

        var reviewsByUser = await Review.find({ user: user._id });
        
        reviewsByUser = reviewsByUser.map(review => {
            return {
                _id: review._id,
                postTitle: review.postTitle,
                rating: review.rating,
                description: review.description,
                helpfulCount: review.helpfulCount,
                unhelpfulCount: review.unhelpfulCount,
                images: review.images,
                user: review.user,
                restaurant: review.restaurant,
                reply: review.reply,
            }
        });

        res.render("profile", {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            helpfulCount: user.helpfulCount,
            reviewCount: user.reviewCount,
            photoCount: user.photoCount,
            dateMade: dateString,
            biography: user.biography,
            profilePic: user.profilePic,
            reviews: JSON.stringify(reviewsByUser),
            isSelf: isSelf
        });
    },
    showEditProfile(req, res) {
        const user = req.session.user;
        res.render("edit-profile", {
            firstName: user.firstName,
            lastName: user.lastName,
            profilePicture: user.profilePic,
            description: user.biography
        });
    },
    async submitEditProfile(req, res) {
        try {
            let user = req.session.user;
            let userName = user.email.split('@')[0];

            let upFirstName = req.body.firstNameEdit;
            let upLastName = req.body.lastNameEdit;
            let upDescription = req.body.descriptionEdit;
            let upProfilePicture;
            if(req.file != null)
               upProfilePicture = req.file.filename;
            
            const foundUser = await User.findOne({email:user.email}).exec();

            if(upFirstName != null)
                foundUser.firstName = upFirstName;
            if(upLastName != null)
                foundUser.lastName = upLastName;
            if(upDescription != null)
                foundUser.biography = upDescription;
            if(upProfilePicture != null)
                foundUser.profilePic = 'uploads/profiles/' + upProfilePicture;
            await foundUser.save();
            req.session.user = foundUser;
            res.redirect('/profile/' + userName);
        } catch (error) {
          console.error('Error updating user:', error);
          res.status(500).send('Failed to update user');
        }
    }
}

export default profileControl;