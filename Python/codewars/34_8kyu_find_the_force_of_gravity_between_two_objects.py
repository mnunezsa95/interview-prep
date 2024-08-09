# ------------------------------------------------------------------------------------------------ #
#                           Find the force of gravity between two objects                          #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 8 kyu

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
Iinput
- Two arrays are given :
-- arr_val (value array), consists of 3 elements
--- 1st element : mass of obj 1
--- 2nd element : mass of obj 2
--- 3rd element : distance between their centers

-- arr_unit (unit array), consists of 3 elements
--- 1st element : unit for mass of obj 1
--- 2nd element : unit for mass of obj 2
--- 3rd element : unit for distance between their centers

-- mass units are :
--- kilogram (kg)
--- gram (g)
--- milligram (mg)
--- microgram (μg)
--- pound (lb)
--- distance units are :

--- meter (m)
--- centimeter (cm)
--- millimeter (mm)
--- micrometer (μm)
--- feet (ft)

- Note
--- value of G = 6.67 × 10−11 N⋅kg−2⋅m2
--- 1 ft = 0.3048 m
--- 1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution
"""


def solution(arr_val, arr_unit):
    G = 6.67e-11
    masses = [arr_val[0], arr_val[1]]
    mass_units = [arr_unit[0], arr_unit[1]]
    converted_masses = []

    def convert_mass(mass_unit, mass):
        if mass_unit == "g":
            mass = mass / 1000
        elif mass_unit == "mg":
            mass = mass / 1e6
        elif mass_unit == "μg":
            mass = mass / 1e9
        elif mass_unit == "lb":
            mass = mass * 0.453592
        return mass

    def convert_distance(dist_unit, dist):
        if dist_unit == "cm":
            dist = dist / 100
        elif dist_unit == "mm":
            dist = dist / 1000
        elif dist_unit == "μm":
            dist = dist / 1e6  # corrected this line
        elif dist_unit == "ft":
            dist = dist * 0.3048
        return dist

    def calculate_f(m1, m2, d1):
        F = G * m1 * m2 / (d1**2)
        return F

    for i in range(len(mass_units)):
        converted_mass = convert_mass(mass_units[i], masses[i])
        converted_masses.append(converted_mass)

    d1 = convert_distance(arr_unit[2], arr_val[2])
    m1 = converted_masses[0]
    m2 = converted_masses[1]

    return calculate_f(m1, m2, d1)


print(solution([1000, 1000, 100], ["g", "kg", "m"]))
