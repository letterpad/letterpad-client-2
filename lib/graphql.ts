export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Analytics = {
  __typename?: 'Analytics';
  google_analytics?: Maybe<Scalars['String']>;
  plausible_data_domain?: Maybe<Scalars['String']>;
  simple_analytics?: Maybe<Scalars['String']>;
  umami_id?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  accessToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  occupation?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permissions>>;
  role?: Maybe<Role>;
  social?: Maybe<Social>;
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type AuthorNotFoundError = LetterpadError & {
  __typename?: 'AuthorNotFoundError';
  message: Scalars['String'];
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  data?: Maybe<Author>;
  errors?: Maybe<Array<Maybe<Error>>>;
  ok: Scalars['Boolean'];
};

export type CreateAuthorError = LetterpadError & {
  __typename?: 'CreateAuthorError';
  message: Scalars['String'];
};

export type CreateAuthorResponse = Author | CreateAuthorError;

export type CreatePostResponse = Post | PostError;

export type DeleteTagsResponse = DeleteTagsResult | TagsError;

export type DeleteTagsResult = {
  __typename?: 'DeleteTagsResult';
  ok: Scalars['Boolean'];
};

export type EditTaxResponse = {
  __typename?: 'EditTaxResponse';
  ok: Scalars['Boolean'];
};

export type Email = {
  __typename?: 'Email';
  body: Scalars['String'];
  subject: Scalars['String'];
  template_id: Scalars['String'];
};

export type EmailError = LetterpadError & {
  __typename?: 'EmailError';
  message: Scalars['String'];
};

export type EmailResponse = Email | EmailError;

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type InputAnalytics = {
  google_analytics?: InputMaybe<Scalars['String']>;
  plausible_data_domain?: InputMaybe<Scalars['String']>;
  simple_analytics?: InputMaybe<Scalars['String']>;
  umami_id?: InputMaybe<Scalars['String']>;
};

export type InputAuthor = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['Int']>;
  social?: InputMaybe<InputSocial>;
  username?: InputMaybe<Scalars['String']>;
};

export type InputCreateAuthor = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  setting?: InputMaybe<SettingInputType>;
  token: Scalars['String'];
  username: Scalars['String'];
};

export type InputCreatePost = {
  cover_image?: InputMaybe<InputImage>;
  excerpt?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusOptions>;
  tags?: InputMaybe<Array<InputMaybe<TagsInputType>>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes>;
};

export type InputImage = {
  height?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type InputNavigation = {
  label: Scalars['String'];
  original_name: Scalars['String'];
  slug: Scalars['String'];
  type: NavigationType;
};

export type InputSocial = {
  facebook?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type InputTags = {
  name: Scalars['String'];
  old_name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type InputUpdateMedia = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type InputUpdatePost = {
  cover_image?: InputMaybe<InputImage>;
  excerpt?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<Scalars['String']>;
  html_draft?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  publishedAt?: InputMaybe<Scalars['Date']>;
  scheduledAt?: InputMaybe<Scalars['Date']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusOptions>;
  tags?: InputMaybe<Array<TagsInputType>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes>;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

export type InputUpdateSubscriber = {
  secret_id?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type LetterpadError = {
  message: Scalars['String'];
};

export type LoginData = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginError = LetterpadError & {
  __typename?: 'LoginError';
  message: Scalars['String'];
};

export type LoginResponse = Author | LoginError;

export type MeResponse = Author | AuthorNotFoundError;

export type Media = {
  __typename?: 'Media';
  authorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type MediaDeleteResponse = MediaDeleteResult | MediaError;

export type MediaDeleteResult = {
  __typename?: 'MediaDeleteResult';
  ok: Scalars['Boolean'];
};

export type MediaError = LetterpadError & {
  __typename?: 'MediaError';
  message: Scalars['String'];
};

export type MediaFilters = {
  authorId?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type MediaNode = {
  __typename?: 'MediaNode';
  count: Scalars['Int'];
  rows: Array<Media>;
};

export type MediaUpdateResponse = MediaError | MediaUpdateResult;

export type MediaUpdateResult = {
  __typename?: 'MediaUpdateResult';
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addSubscriber?: Maybe<SubscribersAddResult>;
  createAuthor?: Maybe<CreateAuthorResponse>;
  createPost: CreatePostResponse;
  deleteMedia?: Maybe<MediaDeleteResponse>;
  deleteTags: DeleteTagsResponse;
  forgotPassword: ForgotPasswordResponse;
  login?: Maybe<LoginResponse>;
  resetPassword: ForgotPasswordResponse;
  updateAuthor?: Maybe<AuthorResponse>;
  updateMedia?: Maybe<MediaUpdateResponse>;
  updateOptions?: Maybe<SettingResponse>;
  updatePost: UpdatePostResponse;
  updateSubscriber: SubscribersUpdateResult;
  updateTags: UpdateTagsResponse;
};


export type MutationAddSubscriberArgs = {
  email: Scalars['String'];
};


export type MutationCreateAuthorArgs = {
  data: InputCreateAuthor;
};


export type MutationCreatePostArgs = {
  data?: InputMaybe<InputCreatePost>;
};


export type MutationDeleteMediaArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationDeleteTagsArgs = {
  name: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data?: InputMaybe<LoginData>;
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  author: InputAuthor;
};


export type MutationUpdateMediaArgs = {
  data: InputUpdateMedia;
};


export type MutationUpdateOptionsArgs = {
  options: Array<SettingInputType>;
};


export type MutationUpdatePostArgs = {
  data?: InputMaybe<InputUpdatePost>;
};


export type MutationUpdateSubscriberArgs = {
  data: InputUpdateSubscriber;
};


export type MutationUpdateTagsArgs = {
  data?: InputMaybe<InputTags>;
};

export type Navigation = {
  __typename?: 'Navigation';
  label: Scalars['String'];
  original_name: Scalars['String'];
  slug: Scalars['String'];
  type: NavigationType;
};

export enum NavigationType {
  Custom = 'custom',
  Page = 'page',
  Tag = 'tag'
}

export enum Permissions {
  ManageAllPosts = 'MANAGE_ALL_POSTS',
  ManageOwnPosts = 'MANAGE_OWN_POSTS',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageUsers = 'MANAGE_USERS',
  ReadOnlyPosts = 'READ_ONLY_POSTS'
}

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Author>;
  cover_image: Image;
  createdAt: Scalars['Date'];
  excerpt?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  html?: Maybe<Scalars['String']>;
  html_draft?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  publishedAt?: Maybe<Scalars['Date']>;
  reading_time?: Maybe<Scalars['String']>;
  scheduledAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status: PostStatusOptions;
  tags?: Maybe<Array<Tags>>;
  title: Scalars['String'];
  type: PostTypes;
  updatedAt: Scalars['Date'];
};

export type PostCountsByStatus = {
  __typename?: 'PostCountsByStatus';
  drafts: Scalars['Int'];
  published: Scalars['Int'];
};

export type PostError = LetterpadError & {
  __typename?: 'PostError';
  message: Scalars['String'];
};

export type PostFilters = {
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  previewHash?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusOptions>;
  type?: InputMaybe<PostTypes>;
};

export type PostResponse = Post | PostError;

export enum PostStatusOptions {
  Draft = 'draft',
  Published = 'published',
  Trashed = 'trashed'
}

export enum PostTypes {
  Page = 'page',
  Post = 'post'
}

export type PostsFilters = {
  author?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['Int']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  previewHash?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortBy>;
  status?: InputMaybe<PostStatusOptions>;
  tag?: InputMaybe<Scalars['String']>;
  tagSlug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes>;
};

export type PostsNode = {
  __typename?: 'PostsNode';
  count: Scalars['Int'];
  rows: Array<Post>;
};

export type PostsResponse = PostError | PostsNode;

export type Query = {
  __typename?: 'Query';
  email: EmailResponse;
  emails: Array<Maybe<Email>>;
  me?: Maybe<MeResponse>;
  media: MediaNode;
  post: PostResponse;
  posts: PostsResponse;
  settings: SettingResponse;
  stats?: Maybe<StatsResponse>;
  subscribers: SubscribersNode;
  tag: TagResponse;
  tags: TagsResponse;
};


export type QueryEmailArgs = {
  template_id?: InputMaybe<Scalars['String']>;
};


export type QueryMediaArgs = {
  filters?: InputMaybe<MediaFilters>;
};


export type QueryPostArgs = {
  filters?: InputMaybe<PostFilters>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostsFilters>;
};


export type QuerySubscribersArgs = {
  author_id?: InputMaybe<Scalars['Int']>;
};


export type QueryTagArgs = {
  slug: Scalars['String'];
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagsFilters>;
};

export type Response = {
  __typename?: 'Response';
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
  post?: Maybe<Post>;
};

export enum Role {
  Admin = 'ADMIN',
  Author = 'AUTHOR',
  Reader = 'READER',
  Reviewer = 'REVIEWER'
}

export type Setting = {
  __typename?: 'Setting';
  analytics?: Maybe<Analytics>;
  banner?: Maybe<Image>;
  client_token: Scalars['String'];
  cloudinary_key?: Maybe<Scalars['String']>;
  cloudinary_name?: Maybe<Scalars['String']>;
  cloudinary_secret?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
  display_author_info: Scalars['Boolean'];
  google_analytics?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  intro_dismissed: Scalars['Boolean'];
  menu: Array<Navigation>;
  show_about_page?: Maybe<Scalars['Boolean']>;
  show_tags_page?: Maybe<Scalars['Boolean']>;
  site_description?: Maybe<Scalars['String']>;
  site_email: Scalars['String'];
  site_favicon?: Maybe<Image>;
  site_footer?: Maybe<Scalars['String']>;
  site_logo?: Maybe<Image>;
  site_tagline?: Maybe<Scalars['String']>;
  site_title: Scalars['String'];
  site_url?: Maybe<Scalars['String']>;
  /** @deprecated No longer supported */
  social_facebook?: Maybe<Scalars['String']>;
  /** @deprecated No longer supported */
  social_github?: Maybe<Scalars['String']>;
  /** @deprecated No longer supported */
  social_instagram?: Maybe<Scalars['String']>;
  /** @deprecated No longer supported */
  social_twitter?: Maybe<Scalars['String']>;
  subscribe_embed?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
};

export type SettingError = LetterpadError & {
  __typename?: 'SettingError';
  message: Scalars['String'];
};

export type SettingInputType = {
  analytics?: InputMaybe<InputAnalytics>;
  banner?: InputMaybe<InputImage>;
  cloudinary_key?: InputMaybe<Scalars['String']>;
  cloudinary_name?: InputMaybe<Scalars['String']>;
  cloudinary_secret?: InputMaybe<Scalars['String']>;
  css?: InputMaybe<Scalars['String']>;
  display_author_info?: InputMaybe<Scalars['Boolean']>;
  google_analytics?: InputMaybe<Scalars['String']>;
  intro_dismissed?: InputMaybe<Scalars['Boolean']>;
  menu?: InputMaybe<Array<InputNavigation>>;
  show_about_page?: InputMaybe<Scalars['Boolean']>;
  show_tags_page?: InputMaybe<Scalars['Boolean']>;
  site_description?: InputMaybe<Scalars['String']>;
  site_email?: InputMaybe<Scalars['String']>;
  site_favicon?: InputMaybe<InputImage>;
  site_footer?: InputMaybe<Scalars['String']>;
  site_logo?: InputMaybe<InputImage>;
  site_tagline?: InputMaybe<Scalars['String']>;
  site_title?: InputMaybe<Scalars['String']>;
  site_url?: InputMaybe<Scalars['String']>;
  social_facebook?: InputMaybe<Scalars['String']>;
  social_github?: InputMaybe<Scalars['String']>;
  social_instagram?: InputMaybe<Scalars['String']>;
  social_twitter?: InputMaybe<Scalars['String']>;
  subscribe_embed?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};

export type SettingResponse = Setting | SettingError;

export type Social = {
  __typename?: 'Social';
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum SortBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type Stats = {
  __typename?: 'Stats';
  media: Scalars['Int'];
  pages: PostCountsByStatus;
  posts: PostCountsByStatus;
  tags: Scalars['Int'];
};

export type StatsError = LetterpadError & {
  __typename?: 'StatsError';
  message: Scalars['String'];
};

export type StatsResponse = Stats | StatsError;

export type Subscribers = {
  __typename?: 'Subscribers';
  author_id: Scalars['Int'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['Int'];
  verified: Scalars['Boolean'];
};

export type SubscribersAddResult = {
  __typename?: 'SubscribersAddResult';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubscribersNode = {
  __typename?: 'SubscribersNode';
  count: Scalars['Int'];
  rows: Array<Subscribers>;
};

export type SubscribersUpdateResult = {
  __typename?: 'SubscribersUpdateResult';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type TagResponse = TagResultError | Tags;

export type TagResultError = LetterpadError & {
  __typename?: 'TagResultError';
  message: Scalars['String'];
};

export type Tags = {
  __typename?: 'Tags';
  name: Scalars['String'];
  posts?: Maybe<PostsResponse>;
  slug: Scalars['String'];
};

export type TagsError = LetterpadError & {
  __typename?: 'TagsError';
  message: Scalars['String'];
};

export type TagsFilters = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  suggest?: InputMaybe<Scalars['Boolean']>;
};

export type TagsInputType = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TagsNode = {
  __typename?: 'TagsNode';
  rows: Array<Tags>;
};

export type TagsResponse = TagsError | TagsNode;

export type UpdatePostResponse = Post | PostError;

export type UpdateTagsResponse = EditTaxResponse | TagsError;

export type AboutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQueryQuery = { __typename?: 'Query', me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null, settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' } };

export type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQueryQuery = { __typename?: 'Query', settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' }, me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null };

export type PageQueryWithHtmlQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type PageQueryWithHtmlQuery = { __typename?: 'Query', post: { __typename: 'Post', html?: string | null, id: number, slug?: string | null, title: string, reading_time?: string | null, publishedAt?: any | null, updatedAt: any, excerpt?: string | null, author?: { __typename?: 'Author', name: string, avatar?: string | null, occupation?: string | null } | null, tags?: Array<{ __typename?: 'Tags', name: string, slug: string }> | null, cover_image: { __typename?: 'Image', src?: string | null } } | { __typename: 'PostError' }, me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null, settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' } };

export type PreviewQueryQueryVariables = Exact<{
  previewHash?: InputMaybe<Scalars['String']>;
}>;


export type PreviewQueryQuery = { __typename?: 'Query', post: { __typename: 'Post', html?: string | null, id: number, slug?: string | null, title: string, reading_time?: string | null, publishedAt?: any | null, updatedAt: any, excerpt?: string | null, author?: { __typename?: 'Author', name: string, avatar?: string | null, occupation?: string | null } | null, tags?: Array<{ __typename?: 'Tags', name: string, slug: string }> | null, cover_image: { __typename?: 'Image', src?: string | null } } | { __typename: 'PostError' }, me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null, settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' } };

export type TagPostsQueryQueryVariables = Exact<{
  tagSlug: Scalars['String'];
}>;


export type TagPostsQueryQuery = { __typename?: 'Query', posts: { __typename?: 'PostError' } | { __typename: 'PostsNode', count: number, rows: Array<{ __typename?: 'Post', id: number, title: string, slug?: string | null, publishedAt?: any | null, reading_time?: string | null, excerpt?: string | null, cover_image: { __typename?: 'Image', src?: string | null }, author?: { __typename?: 'Author', avatar?: string | null, name: string } | null, tags?: Array<{ __typename?: 'Tags', slug: string, name: string }> | null }> }, tag: { __typename?: 'TagResultError', message: string } | { __typename?: 'Tags', name: string, slug: string }, me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null, settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' } };

export type TagsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQueryQuery = { __typename?: 'Query', tags: { __typename: 'TagsError', message: string } | { __typename: 'TagsNode', rows: Array<{ __typename?: 'Tags', name: string, posts?: { __typename: 'PostError' } | { __typename: 'PostsNode', count: number } | null }> }, settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' }, me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null };

export type SettingsFragment = { __typename?: 'Query', settings: { __typename: 'Setting', site_footer?: string | null, subscribe_embed?: string | null, css?: string | null, site_title: string, site_email: string, site_description?: string | null, site_tagline?: string | null, show_about_page?: boolean | null, show_tags_page?: boolean | null, theme?: string | null, site_favicon?: { __typename?: 'Image', src?: string | null } | null, banner?: { __typename?: 'Image', src?: string | null } | null, site_logo?: { __typename?: 'Image', src?: string | null } | null, menu: Array<{ __typename?: 'Navigation', type: NavigationType, slug: string, label: string }>, analytics?: { __typename?: 'Analytics', google_analytics?: string | null } | null } | { __typename?: 'SettingError' } };

export type MeFragment = { __typename?: 'Query', me?: { __typename: 'Author', name: string, bio?: string | null, occupation?: string | null, avatar?: string | null, company_name?: string | null, social?: { __typename?: 'Social', twitter?: string | null, facebook?: string | null, github?: string | null, instagram?: string | null, linkedin?: string | null } | null } | { __typename?: 'AuthorNotFoundError' } | null };

export type PageFragmentFragment = { __typename: 'Post', id: number, slug?: string | null, title: string, reading_time?: string | null, html?: string | null, publishedAt?: any | null, updatedAt: any, excerpt?: string | null, tags?: Array<{ __typename?: 'Tags', name: string, slug: string }> | null, author?: { __typename?: 'Author', name: string, avatar?: string | null, occupation?: string | null } | null, cover_image: { __typename?: 'Image', src?: string | null } };

export type PostsFragmentFragment = { __typename: 'PostsNode', count: number, rows: Array<{ __typename?: 'Post', id: number, title: string, slug?: string | null, publishedAt?: any | null, reading_time?: string | null, excerpt?: string | null, cover_image: { __typename?: 'Image', src?: string | null }, author?: { __typename?: 'Author', avatar?: string | null, name: string } | null, tags?: Array<{ __typename?: 'Tags', slug: string, name: string }> | null }> };

export type PageQueryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type PageQueryQuery = { __typename?: 'Query', post: { __typename: 'Post', id: number, slug?: string | null, title: string, reading_time?: string | null, html?: string | null, publishedAt?: any | null, updatedAt: any, excerpt?: string | null, tags?: Array<{ __typename?: 'Tags', name: string, slug: string }> | null, author?: { __typename?: 'Author', name: string, avatar?: string | null, occupation?: string | null } | null, cover_image: { __typename?: 'Image', src?: string | null } } | { __typename: 'PostError' } };

export type PostsQueryQueryVariables = Exact<{
  tagSlug: Scalars['String'];
}>;


export type PostsQueryQuery = { __typename?: 'Query', posts: { __typename?: 'PostError' } | { __typename: 'PostsNode', count: number, rows: Array<{ __typename?: 'Post', id: number, title: string, slug?: string | null, publishedAt?: any | null, reading_time?: string | null, excerpt?: string | null, cover_image: { __typename?: 'Image', src?: string | null }, author?: { __typename?: 'Author', avatar?: string | null, name: string } | null, tags?: Array<{ __typename?: 'Tags', slug: string, name: string }> | null }> } };

export type TagsFragment_TagResultError_Fragment = { __typename?: 'TagResultError', message: string };

export type TagsFragment_Tags_Fragment = { __typename?: 'Tags', name: string, slug: string };

export type TagsFragmentFragment = TagsFragment_TagResultError_Fragment | TagsFragment_Tags_Fragment;
