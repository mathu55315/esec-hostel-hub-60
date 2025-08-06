import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Shield, User } from "lucide-react";

const Index = () => {
  const panelCards = [
    {
      title: "Admin Panel",
      description: "Complete system management with user control and room oversight",
      icon: Shield,
      bgClass: "bg-gradient-admin",
      textClass: "text-admin-foreground",
      features: ["User Management", "Room Configuration", "System Analytics", "Global Settings"]
    },
    {
      title: "Warden Panel", 
      description: "Room allocation and monitoring with occupancy tracking",
      icon: Users,
      bgClass: "bg-gradient-warden",
      textClass: "text-warden-foreground",
      features: ["Room Allocation", "Occupancy Monitor", "Request Management", "Availability Tracking"]
    },
    {
      title: "Student Panel",
      description: "Room requests and personal dashboard for students",
      icon: User,
      bgClass: "bg-gradient-student", 
      textClass: "text-student-foreground",
      features: ["Room Requests", "Allocation Status", "Room Information", "Personal Dashboard"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">ESEC Hostel Hub</h1>
              <p className="text-muted-foreground">Comprehensive Hostel Management System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Modern Hostel Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Streamlined room allocation, real-time availability tracking, and secure access controls for educational institutions.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              Real-time Tracking
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              4 Members per Room
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Role-based Access
            </Badge>
          </div>
        </div>

        {/* Panel Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {panelCards.map((panel, index) => {
            const IconComponent = panel.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`${panel.bgClass} p-6`}>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        <IconComponent className={`h-8 w-8 ${panel.textClass}`} />
                      </div>
                    </div>
                    <CardTitle className={`text-xl ${panel.textClass}`}>
                      {panel.title}
                    </CardTitle>
                    <CardDescription className={`${panel.textClass} opacity-90`}>
                      {panel.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {panel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant="outline"
                  >
                    Access {panel.title.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Features */}
        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold text-center mb-8">System Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Secure Authentication", desc: "Role-based access control" },
              { title: "Real-time Updates", desc: "Live room availability" },
              { title: "Room Management", desc: "Complete allocation system" },
              { title: "Responsive Design", desc: "Mobile & desktop ready" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary-foreground rounded-full" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 ESEC Hostel Hub - Educational Institution Management System
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;