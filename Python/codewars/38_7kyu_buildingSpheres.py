# ------------------------------------------------------------------------------------------------ #
#                                         Building Spheres                                         #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7 kyu

Now that we have a Block let's move on to something slightly more complex: a Sphere.

Arguments for the constructor
radius -> integer or float (do not round it)
mass -> integer or float (do not round it)

Methods to be defined
• get_radius()       =>  radius of the Sphere (do not round it)
• get_mass()         =>  mass of the Sphere (do not round it)
• get_volume()       =>  volume of the Sphere (rounded to 5 place after the decimal)
• get_surface_area() =>  surface area of the Sphere (rounded to 5 place after the decimal)
• get_density()      =>  density of the Sphere (rounded to 5 place after the decimal)

"""

import math


class Sphere(object):
    def __init__(self, radius, mass):
        self.radius = radius
        self.mass = mass

    def print_values(self):
        print(f"Radius: {self.radius}")
        print(f"Mass: {self.mass}")

    def get_radius(self):
        return self.radius

    def get_mass(self):
        return self.mass

    def get_volume(self):
        volume = (4 / 3) * math.pi * self.radius**3
        return round(volume, 5)

    def get_surface_area(self):
        surface_area = 4 * math.pi * self.radius**2
        return round(surface_area, 5)

    def get_density(self):
        density = self.get_mass() / self.get_volume()
        return round(density, 5)


ball = Sphere(2, 50)

print(ball.get_radius())
print(ball.get_mass())
print(ball.get_volume())
print(ball.get_surface_area())
print(ball.get_density())
