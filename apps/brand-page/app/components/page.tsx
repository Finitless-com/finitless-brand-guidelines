'use client';

import { useState } from 'react';
import {
  Button,
  GlassCard,
  GradientText,
  Badge,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  CTAButton,
  FormContainer,
  FormDivider,
  IconContainer,
  StatusBadge,
  Textarea,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Progress,
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarStatus,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Slider,
  Switch,
  Checkbox,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Toaster,
  showToast,
} from '@finitless/design-system';
import {
  Layout,
  DollarSign,
  Phone,
  TrendingUp,
  Copy,
  Check,
  Loader2,
  Settings,
  User,
  Mail,
  Bell,
  Info,
} from 'lucide-react';

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="sm" onClick={copy} className="gap-2">
      {copied ? (
        <>
          <Check className="h-4 w-4 text-semantic-success" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {label || 'Copy'}
        </>
      )}
    </Button>
  );
}

export default function ComponentsPage() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen py-12 lg:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <IconContainer color="primary">
              <Layout className="h-6 w-6" />
            </IconContainer>
            <h1 className="text-3xl lg:text-4xl font-bold">
              <GradientText>Components</GradientText>
            </h1>
          </div>
          <p className="text-lg text-text-muted mb-12 max-w-2xl">
            45+ UI components built with Radix UI and styled with Tailwind. All components support dark mode and follow Finitless brand guidelines.
          </p>

          {/* Tabs */}
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="mb-8 flex-wrap">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
              <TabsTrigger value="data">Data Display</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="forms">Form Patterns</TabsTrigger>
            </TabsList>

            {/* Buttons */}
            <TabsContent value="buttons">
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Button Variants</h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button variant="primary">Primary</Button>
                    <Button variant="cta">CTA</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="p-4 bg-background-deep rounded-lg">
                    <p className="text-sm text-semantic-warning mb-2">
                      <strong>Important:</strong> Only use ONE CTA button per page.
                    </p>
                    <p className="text-sm text-text-muted">
                      The CTA gradient button is reserved for the primary action (hero, form submit).
                      Use Primary (Finitless Blue) for standard actions.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="xs">XS (28px)</Button>
                    <Button size="sm">Small (36px)</Button>
                    <Button size="md">Medium (44px)</Button>
                    <Button size="lg">Large (48px)</Button>
                    <Button size="xl">XL (52px)</Button>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Button States</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button isLoading>Loading</Button>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Button Shapes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button shape="default">Default</Button>
                    <Button shape="pill">Pill Shape</Button>
                    <Button shape="square" size="icon">
                      <Settings className="h-5 w-5" />
                    </Button>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-4">Usage</h3>
                  <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Button, CTAButton } from '@finitless/design-system';

// Standard action
<Button variant="primary">Save Changes</Button>

// Primary CTA (only one per page!)
<CTAButton size="lg">Get Started Free</CTAButton>

// With loading state
<Button isLoading>Submitting...</Button>

// With icon
<Button prefixIcon={<Plus />}>Add Item</Button>`}
                  </pre>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Inputs */}
            <TabsContent value="inputs">
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Form Inputs</h3>
                  <div className="max-w-md space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="demo-input">Email Address</Label>
                      <Input id="demo-input" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-prefix">With Prefix</Label>
                      <Input
                        id="demo-prefix"
                        prefix={<Mail className="h-4 w-4 text-text-muted" />}
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-error">With Error</Label>
                      <Input
                        id="demo-error"
                        error={true}
                        errorMessage="This field is required"
                        defaultValue="invalid"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-helper">With Helper Text</Label>
                      <Input
                        id="demo-helper"
                        helperText="We'll never share your email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Slider</h3>
                  <div className="max-w-md space-y-4">
                    <div className="flex justify-between">
                      <Label>Volume</Label>
                      <span className="text-sm text-text-muted">{sliderValue[0]}%</span>
                    </div>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                    />
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Toggle Controls</h3>
                  <div className="max-w-md space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">Enable notifications</Label>
                      <Switch id="notifications" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Select</h3>
                  <div className="max-w-md space-y-2">
                    <Label htmlFor="demo-select">Select Option</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Dialogs & Overlays */}
            <TabsContent value="dialogs">
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Dialog</h3>
                  <div className="flex flex-wrap gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you are done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" defaultValue="john@example.com" />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                          </DialogClose>
                          <Button>Save Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                      </DialogTrigger>
                      <DialogContent size="sm">
                        <DialogHeader>
                          <DialogTitle>Delete Account</DialogTitle>
                          <DialogDescription>
                            Are you sure? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                          </DialogClose>
                          <Button variant="destructive">Delete</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Dialog Sizes</h3>
                  <div className="flex flex-wrap gap-4">
                    {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                      <Dialog key={size}>
                        <DialogTrigger asChild>
                          <Button variant="secondary">{size.toUpperCase()}</Button>
                        </DialogTrigger>
                        <DialogContent size={size}>
                          <DialogHeader>
                            <DialogTitle>Size: {size}</DialogTitle>
                            <DialogDescription>
                              This dialog uses the {size} size variant.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="secondary">Close</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Tooltip</h3>
                  <div className="flex flex-wrap gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary">
                          <Info className="h-4 w-4 mr-2" />
                          Hover me
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip!</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-4">Usage</h3>
                  <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Dialog, DialogTrigger, DialogContent, ... } from '@finitless/design-system';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent size="md">
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
                  </pre>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Data Display */}
            <TabsContent value="data">
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Table</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">John Doe</TableCell>
                        <TableCell><Badge variant="success">Active</Badge></TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Jane Smith</TableCell>
                        <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                        <TableCell>User</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Bob Wilson</TableCell>
                        <TableCell><Badge variant="error">Inactive</Badge></TableCell>
                        <TableCell>User</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Avatar</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-text-muted mb-4">Sizes</p>
                      <div className="flex items-center gap-4">
                        <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
                        <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
                        <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
                        <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
                        <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-4">With Status</p>
                      <div className="flex items-center gap-4">
                        <Avatar><AvatarFallback>ON</AvatarFallback><AvatarStatus status="online" /></Avatar>
                        <Avatar><AvatarFallback>OF</AvatarFallback><AvatarStatus status="offline" /></Avatar>
                        <Avatar><AvatarFallback>BS</AvatarFallback><AvatarStatus status="busy" /></Avatar>
                        <Avatar><AvatarFallback>AW</AvatarFallback><AvatarStatus status="away" /></Avatar>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-4">Avatar Group</p>
                      <AvatarGroup max={3}>
                        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
                        <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
                        <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
                        <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
                        <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
                      </AvatarGroup>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Badges</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-text-muted mb-4">Variants</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="error">Error</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="gradient">Gradient</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-4">Status Badges</p>
                      <div className="flex flex-wrap gap-2">
                        <StatusBadge status="live" />
                        <StatusBadge status="active" />
                        <StatusBadge status="pending" />
                        <StatusBadge status="inactive" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Feedback */}
            <TabsContent value="feedback">
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Progress</h3>
                  <div className="space-y-6 max-w-md">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Upload progress</span>
                        <span className="text-text-muted">60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm">Success</span>
                      <Progress value={100} variant="success" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm">Warning</span>
                      <Progress value={45} variant="warning" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm">Error</span>
                      <Progress value={25} variant="error" />
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Toast Notifications</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={() => showToast('This is a notification')}>
                      Default Toast
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => showToast.success('Changes saved successfully!')}
                    >
                      Success
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => showToast.error('Something went wrong!')}
                    >
                      Error
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => showToast.warning('Please review your changes')}
                    >
                      Warning
                    </Button>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-4">Usage</h3>
                  <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Toaster, showToast } from '@finitless/design-system';

// Add Toaster to your app root
<Toaster />

// Show notifications
showToast('Default message');
showToast.success('Success!');
showToast.error('Error!');
showToast.warning('Warning!');

// With options
showToast('Title', {
  description: 'Description text',
  action: { label: 'Undo', onClick: () => {} }
});`}
                  </pre>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Form Patterns */}
            <TabsContent value="forms">
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Login Form Pattern</h3>
                  <div className="flex justify-center py-8">
                    <FormContainer className="w-full max-w-md">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Welcome back</h2>
                        <p className="text-text-muted mt-2">Sign in to your account</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email</Label>
                          <Input id="login-email" type="email" placeholder="you@example.com" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="login-password">Password</Label>
                          <Input id="login-password" type="password" placeholder="Enter password" />
                        </div>

                        <CTAButton className="w-full">Sign In</CTAButton>
                      </div>

                      <FormDivider />

                      <Button variant="secondary" className="w-full">
                        Continue with Google
                      </Button>
                    </FormContainer>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Glass Cards</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <GlassCard highlight="primary">
                      <div className="flex items-start gap-4">
                        <IconContainer color="primary">
                          <DollarSign className="h-6 w-6" />
                        </IconContainer>
                        <div>
                          <div className="text-2xl font-bold">$31,000</div>
                          <div className="text-text-muted">Revenue recovered</div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard highlight="success">
                      <div className="flex items-start gap-4">
                        <IconContainer color="success">
                          <Phone className="h-6 w-6" />
                        </IconContainer>
                        <div>
                          <div className="text-2xl font-bold">2,847</div>
                          <div className="text-text-muted">Calls handled</div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard highlight="cyan">
                      <div className="flex items-start gap-4">
                        <IconContainer color="link">
                          <TrendingUp className="h-6 w-6" />
                        </IconContainer>
                        <div>
                          <div className="text-2xl font-bold">+47%</div>
                          <div className="text-text-muted">Conversion rate</div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </GlassCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </TooltipProvider>
  );
}
