import 'package:flutter/material.dart';

class MyProfile extends StatelessWidget {
  const MyProfile({Key? key}) : super(key: key);

  TextSpan getDivider(BuildContext context) {
    return TextSpan(
      text: ' | ',
      style: TextStyle(color: Theme.of(context).colorScheme.secondaryContainer),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const CircleAvatar(
          radius: 84,
          backgroundColor: Colors.white,
          child: CircleAvatar(
            backgroundImage: AssetImage('assets/profile.png'),
            radius: 82,
          ),
        ),
        const SizedBox(height: 4),
        const Text(
          'Daffa Ilhami',
          style: TextStyle(fontSize: 34, fontWeight: FontWeight.bold),
        ),
        RichText(
          textAlign: TextAlign.center,
          text: TextSpan(
            style:
                Theme.of(context).textTheme.bodySmall?.copyWith(fontSize: 14),
            children: [
              const TextSpan(text: 'Programmer'),
              getDivider(context),
              const TextSpan(text: 'Speedcuber'),
            ],
          ),
        ),
      ],
    );
  }
}
