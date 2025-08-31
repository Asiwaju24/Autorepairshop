import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { Mail, Clock, Settings, Home, User } from "lucide-react";
import React from "react";
import AutoShopWebsite from "./components/AutoShopWebsite";
import Navbar from "./components/Navbar";

export default function AutoShop() {
  return( 
  <>
    <Navbar/>
    <AutoShopWebsite />
  </>
  );
}
