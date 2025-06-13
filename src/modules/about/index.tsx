import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, Heart, MapPin, ShoppingBag, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { FC } from 'react';

interface AboutModuleProps {}

const AboutModule: FC<AboutModuleProps> = () => {
     return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2015, StyleHaven has grown from a small passion project to a global brand dedicated to
                  bringing sustainable, high-quality fashion to customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Mission</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At StyleHaven, we believe that fashion should be both beautiful and responsible. Our mission is to
                create timeless pieces that are ethically made, environmentally conscious, and accessible to all.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/collections"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Explore Collections
                </Link>
                <Link
                  href="/sustainability"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Our Sustainability Pledge
                </Link>
              </div>
            </div>
            <Image
              src="/images/our-story.png"
              width={550}
              height={550}
              alt="Sustainable fashion production"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do at StyleHaven.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center space-y-4 p-4 text-center">
                  <Heart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Passion</h3>
                  <p className="text-muted-foreground">
                    We pour our hearts into every design, fabric choice, and stitch, creating pieces that you'll love to
                    wear.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center space-y-4 p-4 text-center">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Quality</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality, ensuring that each item is made to last and become a treasured part
                    of your wardrobe.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center space-y-4 p-4 text-center">
                  <MapPin className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to ethical production practices and reducing our environmental footprint at every
                    step.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate individuals behind StyleHaven.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/images/headphones.jpg"
                  width={200}
                  height={200}
                  alt="Emma Johnson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Emma Johnson</h3>
                  <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/images/headphones.jpg"
                  width={200}
                  height={200}
                  alt="David Chen"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">David Chen</h3>
                  <p className="text-sm text-muted-foreground">Head of Design</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/images/headphones.jpg"
                  width={200}
                  height={200}
                  alt="Sophia Martinez"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Sophia Martinez</h3>
                  <p className="text-sm text-muted-foreground">Sustainability Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The key milestones that have shaped StyleHaven.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border" />
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2015: The Beginning</h3>
                  <p className="text-muted-foreground">
                    StyleHaven was founded in a small studio apartment with a vision to create sustainable fashion that
                    doesn't compromise on style.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border" />
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2017: First Flagship Store</h3>
                  <p className="text-muted-foreground">
                    We opened our first physical store, bringing our sustainable fashion vision to life in a tangible
                    space.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border" />
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2019: Global Expansion</h3>
                  <p className="text-muted-foreground">
                    StyleHaven expanded to international markets, bringing our sustainable fashion to customers
                    worldwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2022: Sustainability Pledge</h3>
                  <p className="text-muted-foreground">
                    We launched our comprehensive sustainability initiative, committing to 100% sustainable materials by
                    2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it - hear from our community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                      <p className="text-sm leading-loose text-muted-foreground">
                        "StyleHaven's commitment to sustainability without compromising on style is what keeps me coming
                        back. Their pieces are timeless and the quality is exceptional."
                      </p>
                      <div className="font-semibold">- Sarah T.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                      <p className="text-sm leading-loose text-muted-foreground">
                        "I've been a customer since the beginning, and I've watched StyleHaven grow while staying true
                        to their values. Their customer service is as exceptional as their products."
                      </p>
                      <div className="font-semibold">- Michael R.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Community</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be the first to know about new collections, sustainability initiatives, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/newsletter"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutModule;
