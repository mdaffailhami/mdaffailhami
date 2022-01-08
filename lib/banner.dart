import 'package:flutter/material.dart';

class MyBanner extends StatelessWidget {
  const MyBanner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Image.asset(
          'assets/banner.jpeg',
          fit: BoxFit.cover,
          width: double.infinity,
          height: 300,
        ),
        const SizedBox(
          width: double.infinity,
          height: 300,
          child: ColoredBox(color: Colors.black54),
        ),
        SizedBox(
          width: double.infinity,
          height: 300,
          child: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: const [
                CircleAvatar(
                  radius: 60,
                  backgroundImage: AssetImage('assets/profile.jpg'),
                ),
                SizedBox(height: 5),
                Text(
                  'Daffa Ilhami',
                  style: TextStyle(
                    fontWeight: FontWeight.w500,
                    fontSize: 30,
                    shadows: [Shadow(blurRadius: 10)],
                  ),
                ),
                Text(
                  'Programmer | Developer',
                  style: TextStyle(
                    fontWeight: FontWeight.w200,
                  ),
                ),
              ],
            ),
          ),
        )
      ],
    );
  }
}
