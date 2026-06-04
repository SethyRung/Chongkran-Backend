import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

export class UserResponseDto {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @Expose()
  lastName: string;

  @ApiProperty()
  @Expose()
  email: string;

  @ApiProperty()
  @Expose()
  gender: string;

  @ApiProperty()
  @Expose()
  @Type(() => Date)
  dateOfBirth: Date;

  @ApiProperty()
  @Expose()
  role: string;

  @ApiProperty({ required: false })
  @Expose()
  avatar?: string;

  @ApiProperty({ required: false })
  @Expose()
  bio?: string;

  @ApiProperty({ required: false, type: [String] })
  @Expose()
  expertise?: string[];

  @ApiProperty({ required: false })
  @Expose()
  @Type(() => Number)
  followersCount?: number;

  @ApiProperty({ required: false })
  @Expose()
  @Type(() => Number)
  followingCount?: number;

  @ApiProperty({ required: false })
  @Expose()
  @Type(() => Number)
  recipesCount?: number;

  @ApiProperty({ required: false })
  @Expose()
  @Type(() => Number)
  totalViews?: number;

  @ApiProperty({ required: false })
  @Expose()
  @Type(() => Number)
  totalLikes?: number;

  @ApiProperty({ required: false, type: [String] })
  @Expose()
  favoriteRecipes?: string[];

  @ApiProperty({ required: false })
  @Expose()
  authorRequestStatus?: "pending" | "approved" | "rejected";
}
