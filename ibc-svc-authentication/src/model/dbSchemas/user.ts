import mongoose from "mongoose";
import Password from "../../service/handler/password";

interface UserAttrs {
  dateJoined?: Date;
  details?: {
    firstName: string;
    lastName: string;
    phone: {
      areaCode: string;
      number: string;
      isVerified: boolean;
    };
    profileImage: {
      image: string;
      imageId: string;
    };
  };
  security?: {
    email: string;
    password: string;
  };

  country?: {
    name: string;
     shortCodeTwoLetters: string;
    shortCodeThreeLetters: string;
    currency: string;
    currencySymbol: string;
    areaCode: string;
  };
  hasBusinessAccount?: boolean;
  stripeCustomerId?: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  handleSignUp(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  dateJoined: Date;
  details: {
    firstName: string;
    lastName: string;
    phone: {
      areaCode: string;
      number: string;
      isVerified: boolean;
    };
    profileImage: {
      image: string;
      imageId: string;
    };
  };
  security: {
    email: string;
    password: string;
  };
  country: {
    name: string;
     shortCodeTwoLetters: string;
    shortCodeThreeLetters: string;
    currency: string;
    currencySymbol: string;
    areaCode: string;
  };
  hasBusinessAccount: boolean;
  stripeCustomerId: string;
}

const userSchema = new mongoose.Schema(
  {
    dateJoined: { type: Date },
    details: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      phone: {
        areaCode: { type: String },
        number: { type: String },
        isVerified: { type: Boolean, default: false },
      },
      profileImage: {
        image: { type: String },
        imageId: { type: String },
      },
    },
    security: {
      email: {
        type: String,
      },
      password: {
        type: String,
      },
    },
    country: {
      name: {
        type: String,
      },
      countryShortName: {
        type: String,
      },
      shortCodeTwoLetters: {
        type: String,
      },
      shortCodeThreeLetters: {
        type: String,
      },
      currency: {
        type: String,
      },
      areaCode: {
        type: String,
      },
    },
    hasBusinessAccount: {
      type: Boolean,
      default: false,
    },
    stripeCustomerId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.index({ "security.email": 1 });

/* eslint no-invalid-this: "off" */
userSchema.pre("save", async function (done) {
  if (this.isModified("security.password")) {
    const hashed = await Password.toHash(this.get("security.password"));
    this.set("security.password", hashed);
  }
  done();
});

userSchema.statics.handleSignUp = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export default User;
