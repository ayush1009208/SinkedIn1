"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, MapPin, Building2, GraduationCap, ThumbsDown } from "lucide-react";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto my-16 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="relative">
            <div className="h-32 bg-gradient-to-r from-red-400 to-red-600 rounded-t-lg"></div>
            <div className="p-6">
              <Avatar className="w-32 h-32 border-4 border-background absolute -top-16 left-6" />
              <div className="mt-16">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-muted-foreground">Professional Dream Chaser | Serial Job Rejectee</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Parents' Basement, Somewhere</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleOpenModal}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit Failures
                  </Button>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    Professional failure enthusiast. Expert at missing deadlines and
                    making things awkward in meetings. Proud holder of 0 achievements
                    and countless rejections.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Failed Experience
                    </h3>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm text-muted-foreground">
                        • Almost Junior Developer (Rejected) - Tech Corp
                      </li>
                      <li className="text-sm text-muted-foreground">
                        • Coffee Spiller (Fired) - Startup Inc
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Mis-Education
                    </h3>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm text-muted-foreground">
                        • Dropped Out - University of Life
                      </li>
                      <li className="text-sm text-muted-foreground">
                        • Failed Online Courses - YouTube University
                      </li>
                    </ul>
                  </Card>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4" />
                    Failure Highlights
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      "Missed Deadlines",
                      "Bug Creation",
                      "Meeting Mishaps",
                      "Failed Interviews",
                      "Awkward Small Talk",
                      "Code Disasters",
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-[rgba(0,0,0,0.83)] flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ margin: 0, padding: 0 }}
            >
              <motion.div
                className="bg-background p-6 rounded-lg w-96 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full p-2 border border-border rounded-lg"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      id="bio"
                      className="mt-1 block w-full p-2 border border-border rounded"
                      defaultValue="Parents' Basement, Somewhere"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                      Recently Resigned From
                    </label>
                    <input
                      id="bio"
                      className="mt-1 block w-full p-2 border border-border rounded"
                      defaultValue="Tech Corp"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      className="mt-1 block w-full p-2 border border-border rounded no-scrollbar"
                      defaultValue="Professional failure enthusiast."
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" onClick={handleCloseModal}>
                      Cancel
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-2">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
